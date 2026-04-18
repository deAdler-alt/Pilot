import { PageHeader } from "@/components/shell/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminApiKeysPage() {
  return (
    <>
      <PageHeader
        title="Klucze API"
        description="Klucze dostawców modeli i usług — wyłącznie dla administratorów technicznych. W produkcji szyfrowane i rotowane."
        actions={
          <Button type="button" variant="secondary" size="lg">
            Audyt dostępu
          </Button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex flex-wrap items-center gap-2">
              <CardTitle>OpenAI</CardTitle>
              <Badge tone="brand">MVP</Badge>
            </div>
            <CardDescription>Klucz serwerowy — nigdy w bundle frontendu.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="openai-key">Klucz API</Label>
              <Input id="openai-key" type="password" placeholder="sk-…" disabled />
            </div>
            <div className="flex flex-wrap gap-3">
              <Button type="button" variant="primary" size="lg">
                Zapisz
              </Button>
              <Button type="button" variant="ghost" size="lg">
                Test połączenia
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Polityka rotacji</CardTitle>
            <CardDescription>Zalecenia operacyjne (placeholder).</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-default-muted">
            <p>
              Rotacja kluczy co 90 dni, osobne klucze dla środowisk dev/stage/prod oraz ograniczenie
              zakresu IP — do wdrożenia w backendzie.
            </p>
            <Badge tone="warning">Wymagana zgoda RODO / umowa powierzenia</Badge>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
