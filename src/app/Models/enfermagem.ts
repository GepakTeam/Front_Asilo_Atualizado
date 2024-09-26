export interface Enfermagem{
    nome: string;
    dataNascimento: Date;
    dataExame: Date;
    nivelConciencia: boolean;
    pupilasSituacao: boolean;
    pupilaPD: string;
    pupilaPE: string;
    fotorreacao: boolean;
    sistemaCardioCirculatorio: boolean;
    carotideosEsquerdo: string;
    carotideosDireito: string;
    braquiaisEsquerdo: string;
    braquiaisDireito: string;
    radiaisEsquerdo: string;
    radiaisDireito: string;
    femoraisEsquerdo: string;
    femoraisDireito: string;
    pediososEsquerdo: string;
    pediososDireito: string;
    popliteosEsquerdo: string;
    popliteosDireito: string;
    perfusaoPeriferica: boolean;
    edema: boolean;
    padrao: boolean;
    murmurioVesicular: boolean;
    expansaoTorax: boolean;
    ruidosAdventicios: boolean;
    aceitacaoDieta: boolean;
    denticao: boolean;
    abdome: boolean;
    rha: boolean;
    massa: boolean;
    evacuacao: boolean;
    genito: boolean;
    urina: boolean;
    vesical: boolean;
    cutanea: boolean;
    sensorial: boolean;
    umidade: boolean;
    atividade: boolean;
    mobilidade: boolean;
    nutricao: boolean;
    friccao: boolean;
    diagnosticosEnfermagem: boolean;
    controleSinaisVitaisData: Date;
    controleSinaisVitaisHorario: Date;
    controleSinaisVitaisPa: string;
    controleSinaisVitaisFc: string;
    controleSinaisVitaisFr: string;
    controleSinaisVitaisTemp: string;
    controleSinaisVitaisPvc: string;
    controleSinaisVitaisGlicemia: string;
    controleSinaisVitaisAnotacoes: string;
}