# BHPilot

Monorepo: **Next.js (React)** w [`frontend/`](frontend/), **Django** w [`backend/`](backend/), baza **PostgreSQL + pgvector** przez Docker.

## Wymagania

- Node.js 20+
- Python 3.12+ (testowane z 3.14)
- Docker Desktop (dla Postgresa)

## Pierwsze uruchomienie

1. **Baza danych** (z katalogu głównego repozytorium) — wymaga uruchomionego **Docker Desktop** / demona Docker:

   ```bash
   docker compose up -d
   ```

   Jeśli Docker nie jest dostępny, backend domyślnie użyje **SQLite** (bez pgvector) do czasu uruchomienia kontenera i ustawienia `DATABASE_URL` w `backend/.env`.

2. **Backend** — skopiuj zmienne (opcjonalnie):

   ```bash
   cp backend/.env.example backend/.env
   ```

   Uruchomienie:

   ```bash
   cd backend && source .venv/bin/activate && python manage.py runserver
   ```

   Endpoint sprawdzający: [http://127.0.0.1:8000/api/health/](http://127.0.0.1:8000/api/health/)

3. **Frontend**:

   ```bash
   cd frontend && npm run dev
   ```

   Aplikacja: [http://localhost:3000](http://localhost:3000)

## Zmienne środowiskowe

Wzór w [`.env.example`](.env.example) (root) oraz [`backend/.env.example`](backend/.env.example).

## Struktura

- `frontend/` — interfejs (PL, layout pod desktop / kiosk).
- `backend/` — REST API, RAG, modele domenowe (kolejne aplikacje pod `apps/`).
