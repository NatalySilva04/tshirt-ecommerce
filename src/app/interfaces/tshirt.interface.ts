export interface ITshirt {
id: any;
    catalog_id: string;
    _id: string;
    nome: string;
    categoria: string;
    preco: number; 
    tamanho: string;
    cor: string;
    descricao: string;
    quantidade: number;
    totalInStock: number;
    totalAddedToCart: number;
};

type TshirtType = {
    id: number;
    nome: string;
    preco: number; 
    tamanho: string;
    cor: string;
    descricao: string;   
};

type TshirtFantasyType = TshirtType & { fantasyType: "high fantasy" };

