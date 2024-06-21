export class Trabajo {
    public Titulo : string = '';
    public Empresa : string = '';
    public FechaInicio : Date = new Date();
    public FechaTermino? : Date = new Date();
    public TrabajaActualmente : boolean = false;
    public Descripcion : Array<string> = [];
}

