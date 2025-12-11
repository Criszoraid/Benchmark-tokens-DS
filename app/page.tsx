import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatsCards } from "@/components/stats-cards";
import { DataTable } from "@/components/data-table";
import { Charts } from "@/components/charts";
import { DetailView } from "@/components/detail-view";
import { DesignSystem } from "@/types";
import data from "./data.json";

const designSystemsData = data as DesignSystem[];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Benchmark de Design Systems</h1>
          <p className="text-muted-foreground">
            Análisis comparativo de sistemas de diseño y sus tokens
          </p>
        </div>

        <StatsCards data={designSystemsData} />

        <Tabs defaultValue="tabla" className="space-y-4">
          <TabsList>
            <TabsTrigger value="tabla">Tabla</TabsTrigger>
            <TabsTrigger value="detalles">Vista Detallada</TabsTrigger>
            <TabsTrigger value="graficos">Gráficos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tabla" className="space-y-4">
            <DataTable data={designSystemsData} />
          </TabsContent>
          
          <TabsContent value="detalles" className="space-y-4">
            <DetailView data={designSystemsData} />
          </TabsContent>
          
          <TabsContent value="graficos" className="space-y-4">
            <Charts data={designSystemsData} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
