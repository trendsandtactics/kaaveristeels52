from datetime import datetime, timezone
from typing import Optional

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr, Field

app = FastAPI(
    title="KAAVERI Steels FastAPI Services",
    version="1.0.0",
    description="Standalone FastAPI service layer for lightweight backend operations.",
)


class QuoteRequestIn(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    phone: str = Field(min_length=7, max_length=20)
    product_type: str = Field(min_length=2, max_length=80)
    quantity: int = Field(gt=0)
    company: Optional[str] = Field(default=None, max_length=120)
    location: Optional[str] = Field(default=None, max_length=120)
    notes: Optional[str] = Field(default=None, max_length=1000)


class QuoteRequestOut(QuoteRequestIn):
    id: int
    created_at: datetime


class HealthResponse(BaseModel):
    status: str
    service: str
    timestamp_utc: datetime


quote_requests: list[QuoteRequestOut] = []


@app.get("/health", response_model=HealthResponse)
def health_check() -> HealthResponse:
    return HealthResponse(
        status="ok",
        service="kaaveri-fastapi",
        timestamp_utc=datetime.now(timezone.utc),
    )


@app.get("/quote-requests", response_model=list[QuoteRequestOut])
def list_quote_requests() -> list[QuoteRequestOut]:
    return quote_requests


@app.post("/quote-requests", response_model=QuoteRequestOut, status_code=201)
def create_quote_request(payload: QuoteRequestIn) -> QuoteRequestOut:
    next_id = len(quote_requests) + 1
    item = QuoteRequestOut(
        id=next_id,
        created_at=datetime.now(timezone.utc),
        **payload.model_dump(),
    )
    quote_requests.append(item)
    return item


@app.get("/quote-requests/{request_id}", response_model=QuoteRequestOut)
def get_quote_request(request_id: int) -> QuoteRequestOut:
    for item in quote_requests:
        if item.id == request_id:
            return item
    raise HTTPException(status_code=404, detail="Quote request not found")
