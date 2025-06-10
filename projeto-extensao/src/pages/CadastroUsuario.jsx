import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

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

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Dados pessoais</h2>
          <Input name="nome" placeholder="Nome completo" value={form.nome || ""} onChange={handleChange} />
          <Input name="nacionalidade" placeholder="Nacionalidade" value={form.nacionalidade || ""} onChange={handleChange} />
          <Input name="estadoCivil" placeholder="Estado Civil" value={form.estadoCivil || ""} onChange={handleChange} />
          <Input name="sexo" placeholder="Sexo" value={form.sexo || ""} onChange={handleChange} />
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Contatos</h2>
          <Input name="telefone" placeholder="Telefone" value={form.telefone || ""} onChange={handleChange} />
          <Input name="email" placeholder="E-mail" value={form.email || ""} onChange={handleChange} />
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Contatos de emergência</h2>
          <Input name="nomeEmergencia" placeholder="Nome do contato" value={form.nomeEmergencia || ""} onChange={handleChange} />
          <Input name="parentesco" placeholder="Parentesco" value={form.parentesco || ""} onChange={handleChange} />
          <Input name="telefoneEmergencia" placeholder="Telefone" value={form.telefoneEmergencia || ""} onChange={handleChange} />
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Endereço</h2>
          <Input name="endereco" placeholder="Endereço completo" value={form.endereco || ""} onChange={handleChange} />
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Documentos</h2>
          <Input name="cpf" placeholder="CPF" value={form.cpf || ""} onChange={handleChange} />
          <Input name="rg" placeholder="RG" value={form.rg || ""} onChange={handleChange} />
          <Input name="orgaoEmissor" placeholder="Órgão emissor/UF" value={form.orgaoEmissor || ""} onChange={handleChange} />
          <Input name="dataEmissao" placeholder="Data de emissão" value={form.dataEmissao || ""} onChange={handleChange} />
          <Input name="tituloEleitor" placeholder="Título de Eleitor" value={form.tituloEleitor || ""} onChange={handleChange} />
          <Input name="ctps" placeholder="CTPS" value={form.ctps || ""} onChange={handleChange} />
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Dados bancários</h2>
          <Input name="banco" placeholder="Banco" value={form.banco || ""} onChange={handleChange} />
          <Input name="agencia" placeholder="Agência" value={form.agencia || ""} onChange={handleChange} />
          <Input name="conta" placeholder="Conta" value={form.conta || ""} onChange={handleChange} />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Informações salariais</h2>
          <Input name="salario" placeholder="Salário que recebe" value={form.salario || ""} onChange={handleChange} />
          <Input name="complemento" placeholder="Complemento" value={form.complemento || ""} onChange={handleChange} />
          <Input name="salarioAdicional" placeholder="Salário adicional" value={form.salarioAdicional || ""} onChange={handleChange} />
          <Input name="reajuste" placeholder="Data do último reajuste" value={form.reajuste || ""} onChange={handleChange} />
          <Input name="tipoSalario" placeholder="Tipo do salário" value={form.tipoSalario || ""} onChange={handleChange} />
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <Button className="bg-gray-400">Descartar</Button>
          <Button>Salvar</Button>
        </div>
      </main>
    </div>
  );
}
