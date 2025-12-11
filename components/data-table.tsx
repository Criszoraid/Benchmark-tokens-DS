"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DesignSystem } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DataTableProps {
  data: DesignSystem[];
}

export function DataTable({ data }: DataTableProps) {
  const getMetadataBadge = (metadata: string | null) => {
    if (!metadata) return <Badge variant="outline">Sin datos</Badge>;
    if (metadata.includes("CON") || metadata.includes("metadatos, code syntax"))
      return <Badge className="bg-green-500">Completo</Badge>;
    if (metadata.includes("Code syntax"))
      return <Badge className="bg-yellow-500">Parcial</Badge>;
    return <Badge variant="destructive">Sin metadatos</Badge>;
  };

  const hasTypography = (typography: string) => {
    return typography?.includes("SI") || typography?.toUpperCase().includes("TYPOGRAPHY");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tabla de Datos Completa</CardTitle>
        <CardDescription>
          Vista detallada de todos los sistemas de diseño analizados
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sistema</TableHead>
                <TableHead>Variables de Color</TableHead>
                <TableHead>Typography</TableHead>
                <TableHead>Variables Numéricas</TableHead>
                <TableHead>Metadatos</TableHead>
                <TableHead>Features</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((system, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {system["Design System"]}
                  </TableCell>
                  <TableCell className="max-w-xs">
                    <div className="truncate">{system["Variables de Color"]}</div>
                  </TableCell>
                  <TableCell>
                    {hasTypography(system["Variables de Texto/Typography"]) ? (
                      <Badge className="bg-blue-500">Sí</Badge>
                    ) : (
                      <Badge variant="outline">No</Badge>
                    )}
                  </TableCell>
                  <TableCell className="max-w-xs">
                    <div className="truncate">{system["Variables Numéricas"]}</div>
                  </TableCell>
                  <TableCell>{getMetadataBadge(system["Metadatos"])}</TableCell>
                  <TableCell>
                    {system["Features"] ? (
                      <Badge variant="secondary">{system["Features"]}</Badge>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

