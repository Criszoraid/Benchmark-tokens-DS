"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DesignSystem } from "@/types";

interface DetailViewProps {
  data: DesignSystem[];
}

export function DetailView({ data }: DetailViewProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data.map((system, index) => (
        <Card key={index} className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg">{system["Design System"]}</CardTitle>
            <CardDescription>Detalles del sistema</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 space-y-3">
            <div>
              <p className="text-sm font-semibold text-muted-foreground">Colecciones:</p>
              <p className="text-sm">{system["Colecciones de Variables"]}</p>
            </div>
            
            <div>
              <p className="text-sm font-semibold text-muted-foreground">Variables de Color:</p>
              <p className="text-sm">{system["Variables de Color"]}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-muted-foreground">Typography:</p>
              {system["Variables de Texto/Typography"]?.includes("SI") || 
               system["Variables de Texto/Typography"]?.toUpperCase().includes("TYPOGRAPHY") ? (
                <Badge className="bg-blue-500">Sí</Badge>
              ) : (
                <Badge variant="outline">No</Badge>
              )}
            </div>

            <div>
              <p className="text-sm font-semibold text-muted-foreground">Variables Numéricas:</p>
              <p className="text-sm">{system["Variables Numéricas"]}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-muted-foreground">Metadatos:</p>
              {system["Metadatos"]?.includes("CON") || system["Metadatos"]?.includes("Code syntax") ? (
                <Badge className="bg-green-500">Completo</Badge>
              ) : system["Metadatos"]?.includes("Code syntax") ? (
                <Badge className="bg-yellow-500">Parcial</Badge>
              ) : (
                <Badge variant="destructive">Sin metadatos</Badge>
              )}
            </div>

            {system["Features"] && (
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Features:</p>
                <Badge variant="secondary">{system["Features"]}</Badge>
              </div>
            )}

            {system["Observaciones"] && (
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Observaciones:</p>
                <p className="text-xs text-muted-foreground italic">{system["Observaciones"]}</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

