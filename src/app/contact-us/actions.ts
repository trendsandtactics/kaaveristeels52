'use server';

import pool from '@/lib/db';

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name');
    const company = formData.get('company');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const productType = formData.get('productType');
    const quantity = formData.get('quantity');
    const location = formData.get('location');
    const notes = formData.get('notes');

    try {
        const query = `
            INSERT INTO quote_requests 
            (name, company, phone, email, product_type, quantity, location, notes)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [name, company, phone, email, productType, quantity, location, notes];
        
        await pool.execute(query, values);
        return { success: true, message: 'Request submitted successfully!' };
    } catch (error) {
        console.error('Database insertion error:', error);
        return { success: false, message: 'Failed to submit request. Please try again.' };
    }
}