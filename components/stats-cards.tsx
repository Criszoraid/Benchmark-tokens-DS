"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DesignSystem } from "@/types";

interface StatsCardsProps {
  data: DesignSystem[];
}

export function StatsCards({ data }: StatsCardsProps) {
  const totalSystems = data.length;
  const withTypography = data.filter(
    (d) => d["Variables de Texto/Typography"]?.includes("SI") || 
           d["Variables de Texto/Typography"]?.toUpperCase().includes("TYPOGRAPHY")
  ).length;
  const withMetadata = data.filter(
    (d) => d["Metadatos"]?.includes("CON") || d["Metadatos"]?.includes("Code syntax")
  ).length;
  const withFeatures = data.filter((d) => d["Features"]).length;

  const stats = [
    {
      title: "Total Sistemas",
      value: totalSystems,
      description: "Sistemas de diseño analizados",
    },
    {
      title: "Con Typography",
      value: withTypography,
      description: `${Math.round((withTypography / totalSystems) * 100)}% tienen variables de texto`,
    },
    {
      title: "Con Metadatos",
      value: withMetadata,
      description: "Sistemas documentados",
    },
    {
      title: "Con Features",
      value: withFeatures,
      description: "Sistemas con características especiales",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

