import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CadastroUsuario() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h1 className="text-xl font-bold mb-4">Gestão de pessoas</h1>
        <button className="bg-gray-700 w-full py-2 rounded">Início</button>
      </aside>
      <main className="flex-1 bg-gray-100 overflow-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm text-gray-500">Empresa</p>
            <p className="font-medium">FICTITIUS SERVICE COMPANY</p>
            <p className="text-sm text-gray-500">Departamento</p>
            <p className="font-medium">SEGURANÇA PATRIMONIAL</p>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <p className="text-right text-sm text-gray-500">Thanya S Briel</p>
              <p className="text-right font-medium">GESTOR</p>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded">Sair</button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Contrato de trabalho</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700">Situação do contrato</label>
              <Input name="situacao" value={form.situacao || ""} onChange={handleChange} />
            </div>
            <div>
              <label className="text-sm text-gray-700">Tipo de contrato</label>
              <Input name="tipoContrato" value={form.tipoContrato || ""} onChange={handleChange} />
            </div>
            <div>
              <label className="text-sm text-gray-700">Data de admissão</label>
              <Input type="date" name="dataAdmissao" value={form.dataAdmissao || ""} onChange={handleChange} />
            </div>
            <div>
              <label className="text-sm text-gray-700">Cargo</label>
              <Input name="cargo" value={form.cargo || ""} onChange={handleChange} />
            </div>
            <div>
              <label className="text-sm text-gray-700">Departamento</label>
              <Input name="departamento" value={form.departamento || ""} onChange={handleChange} />
            </div>
            <div>
              <label className="text-sm text-gray-700">Centro de custo</label>
              <Input name="centroCusto" value={form.centroCusto || ""} onChange={handleChange} />
            </div>
            <div>
              <label className="text-sm text-gray-700">Escala de trabalho</label>
              <Input name="escalaTrabalho" value={form.escalaTrabalho || ""} onChange={handleChange} />
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-6">
            <Button variant="outline">Descartar</Button>
            <Button>Salvar</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
