"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { DesignSystem } from "@/types";

interface ChartsProps {
  data: DesignSystem[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

export function Charts({ data }: ChartsProps) {
  // Preparar datos para gráfico de Typography
  const typographyData = data.map((system) => ({
    name: system["Design System"],
    tiene: system["Variables de Texto/Typography"]?.includes("SI") || 
           system["Variables de Texto/Typography"]?.toUpperCase().includes("TYPOGRAPHY") ? 1 : 0,
    noTiene: system["Variables de Texto/Typography"]?.includes("NO") ? 1 : 0,
  }));

  // Preparar datos para gráfico de pie - Metadatos
  const metadataData = [
    { name: "Con Metadatos", value: data.filter(d => d["Metadatos"]?.includes("CON") || d["Metadatos"]?.includes("Code syntax")).length },
    { name: "Sin Metadatos", value: data.filter(d => !d["Metadatos"] || d["Metadatos"]?.includes("SIN")).length },
  ];

  // Contar colecciones de variables
  const collectionCounts = data.map((system) => {
    const collections = system["Colecciones de Variables"];
    const count = collections.includes("NO tiene") 
      ? 0 
      : collections.split(",").length;
    return {
      name: system["Design System"],
      colecciones: count,
    };
  }).sort((a, b) => b.colecciones - a.colecciones);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Colecciones de Variables</CardTitle>
          <CardDescription>Número de colecciones por sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={collectionCounts}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                angle={-45}
                textAnchor="end"
                height={100}
                fontSize={12}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="colecciones" fill="#8884d8" name="Colecciones" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Distribución de Metadatos</CardTitle>
          <CardDescription>Proporción de sistemas con metadatos</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={metadataData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${((percent || 0) * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {metadataData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Soporte de Typography por Sistema</CardTitle>
          <CardDescription>Comparativa de variables de texto/typography</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={typographyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                angle={-45}
                textAnchor="end"
                height={100}
                fontSize={12}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="tiene" stackId="a" fill="#00C49F" name="Tiene Typography" />
              <Bar dataKey="noTiene" stackId="a" fill="#FF8042" name="No tiene Typography" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

