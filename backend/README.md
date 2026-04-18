# BHPilot — backend (Django)

- Ustawienia: `config.settings.dev` (domyślnie w `manage.py`).
- Skopiuj `.env.example` → `.env`; dla Postgresa z Docker Compose ustaw `DATABASE_URL` zgodnie z root [`docker-compose.yml`](../docker-compose.yml).
- API: `GET /api/health/`

Instalacja od zera (bez istniejącego `.venv`):

```bash
python3 -m venv .venv && source .venv/bin/activate && pip install -r requirements/dev.txt
python manage.py migrate
python manage.py runserver
```
