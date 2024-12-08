'use client';
import { Chart } from "react-google-charts";

export default function Home() {
  return (
    <div className="flex flex-row items-start justify-between flex-grow h-full">
      {/* Div do Gráfico de Barras */}
      <div className="w-1/2 h-full p-2">
        <Chart
          chartType="BarChart"
          width="100%"
          height="100%"
          data={[
            ['Mês', 'R$'],
            ['Jan', 100],
            ['Fev', 200],
            ['Mar', 300],
            ['Abr', 400],
            ['Mai', 500],
            ['Jun', 600],
            ['Jul', 700],
            ['Ago', 800],
            ['Set', 900],
            ['Out', 1000],
            ['Nov', 1100],
            ['Dez', 1200],
          ]}
          options={{
            title: 'Fretes por mês',
            chartArea: {
              width: '85%',
              height: '80%',
            },
            bar: { groupWidth: "80%" },
            legend: { position: 'none' },
            fontName: 'Fira Sans',
            titleTextStyle: { color: '#DAF1DE' },
            hAxis: {
              textStyle: { color: '#DAF1DE' },
              titleTextStyle: { color: '#DAF1DE' },
            },
            vAxis: {
              textStyle: { color: '#DAF1DE' },
              titleTextStyle: { color: '#DAF1DE' },
            },
            backgroundColor: '#235347',
            colors: ['#DAF1DE'],
          }}
        />
      </div>

      {/* Div dos Gráficos de Pizza e Colunas */}
      <div className="w-1/2 h-full flex flex-col space-y-2 p-2">
        {/* Gráfico de Pizza */}
        <div className="flex-grow">
          <Chart
            chartType="PieChart"
            width="100%"
            height="100%"
            data={[
              ['Receita', 'Despesa'],
              ['Receita', 100],
              ['Despesa', 200],
            ]}
            options={{
              title: 'Receita X Despesa',
              backgroundColor: '#235347',
              pieSliceText: 'percentage',
              fontName: 'Fira Sans',
              titleTextStyle: { color: '#DAF1DE' },
              legend: { position: 'none' },
              colors: ['#0B2B26', '#8B0000'],
            }}
          />
        </div>

        {/* Gráfico de Colunas */}
        <div className="flex-grow">
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="100%"
            data={[
              ['Mês', 'Fretes'],
              ['Jan', 100],
              ['Fev', 200],
              ['Mar', 300],
              ['Abr', 400],
              ['Mai', 500],
            ]}
            options={{
              title: 'Fretes por Mês',
              backgroundColor: '#235347',
              chartArea: {
                width: '80%',
                height: '70%',
              },
              legend: { position: 'none' },
              fontName: 'Fira Sans',
              titleTextStyle: { color: '#DAF1DE' },
              hAxis: {
                textStyle: { color: '#DAF1DE' },
                titleTextStyle: { color: '#DAF1DE' },
              },
              vAxis: {
                textStyle: { color: '#DAF1DE' },
                titleTextStyle: { color: '#DAF1DE' },
              },
              colors: ['#DAF1DE'],
            }}
          />
        </div>
      </div>
    </div>
  );
}
