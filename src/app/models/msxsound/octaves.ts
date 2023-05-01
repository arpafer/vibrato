import { MusicalNoteFrecuency } from "./MusicalNoteFrecuency";

export class NotasOctave {
  arrayNotes: Map<string, number>;

  constructor() {
    this.arrayNotes = new Map<string, number>();
   /* this.arrayNotes.set("Do", 0);
    this.arrayNotes.set("Re", 0);
    this.arrayNotes.set("Mi", 0);
    this.arrayNotes.set("Fa", 0);
    this.arrayNotes.set("Sol", 0);
    this.arrayNotes.set("La", 0);
    this.arrayNotes.set("Si", 0); */
  }
}

class NotasOctave1 extends NotasOctave {

  constructor() {
    super();
    this.arrayNotes.set("Do", MusicalNoteFrecuency.Do1);
    this.arrayNotes.set("DoS", MusicalNoteFrecuency.Dos1);
    this.arrayNotes.set("Re", MusicalNoteFrecuency.Re1);
    this.arrayNotes.set("ReS", MusicalNoteFrecuency.Res1);
    this.arrayNotes.set("Mi", MusicalNoteFrecuency.Mi1);
    this.arrayNotes.set("MiS", MusicalNoteFrecuency.MiS1);
    this.arrayNotes.set("Fa", MusicalNoteFrecuency.Fa1);
    this.arrayNotes.set("FaS", MusicalNoteFrecuency.FaS1);
    this.arrayNotes.set("Sol", MusicalNoteFrecuency.Sol1);
    this.arrayNotes.set("SolS", MusicalNoteFrecuency.SolS1);
    this.arrayNotes.set("La", MusicalNoteFrecuency.La1);
    this.arrayNotes.set("LaS", MusicalNoteFrecuency.LaS1);
    this.arrayNotes.set("Si", MusicalNoteFrecuency.Si1);
    this.arrayNotes.set("SiS", MusicalNoteFrecuency.SiS1);
  }

}

export class Octave {
  notas: NotasOctave;

  constructor() {
    this.notas = new NotasOctave1();
  }
}

class Octave1 extends Octave {

  constructor() {
    super();
    this.notas = new NotasOctave1();
  }
}

class NotasOctave2 extends NotasOctave {

  constructor() {
    super();
    this.arrayNotes.set("D", MusicalNoteFrecuency.Do2);
    this.arrayNotes.set("Do+", MusicalNoteFrecuency.Dos2);
    this.arrayNotes.set("Re", MusicalNoteFrecuency.Re2);
    this.arrayNotes.set("Re+", MusicalNoteFrecuency.Res2);
    this.arrayNotes.set("Mi", MusicalNoteFrecuency.Mi2);
    this.arrayNotes.set("Mi+", MusicalNoteFrecuency.MiS2);
    this.arrayNotes.set("Fa", MusicalNoteFrecuency.Fa2);
    this.arrayNotes.set("Fa+", MusicalNoteFrecuency.FaS2);
    this.arrayNotes.set("Sol", MusicalNoteFrecuency.Sol2);
    this.arrayNotes.set("Sol+", MusicalNoteFrecuency.SolS2);
    this.arrayNotes.set("La", MusicalNoteFrecuency.La2);
    this.arrayNotes.set("La+", MusicalNoteFrecuency.LaS2);
    this.arrayNotes.set("Si", MusicalNoteFrecuency.Si2);
    this.arrayNotes.set("Si+", MusicalNoteFrecuency.SiS2);
  }

}

class Octave2 extends Octave {

  constructor() {
    super();
    this.notas = new NotasOctave2();
  }
}

class Octave3 extends Octave {
   constructor() {
    super();
    this.notas = new NotasOctave3();
   }
}

class NotasOctave3 extends NotasOctave {

  constructor() {
    super();
    this.arrayNotes.set("Do", MusicalNoteFrecuency.Do3);
    this.arrayNotes.set("Do+", MusicalNoteFrecuency.Dos3);
    this.arrayNotes.set("Re", MusicalNoteFrecuency.Re3);
    this.arrayNotes.set("Re+", MusicalNoteFrecuency.Res3);
    this.arrayNotes.set("Mi", MusicalNoteFrecuency.Mi3);
    this.arrayNotes.set("Mi+", MusicalNoteFrecuency.MiS3);
    this.arrayNotes.set("Fa", MusicalNoteFrecuency.Fa3);
    this.arrayNotes.set("Fa+", MusicalNoteFrecuency.FaS3);
    this.arrayNotes.set("Sol", MusicalNoteFrecuency.Sol3);
    this.arrayNotes.set("Sol+", MusicalNoteFrecuency.SolS3);
    this.arrayNotes.set("La", MusicalNoteFrecuency.La3);
    this.arrayNotes.set("La+", MusicalNoteFrecuency.LaS3);
    this.arrayNotes.set("Si", MusicalNoteFrecuency.Si3);
    this.arrayNotes.set("Si+", MusicalNoteFrecuency.SiS3);
  }
}

class Octave4 extends Octave {
  constructor() {
   super();
   this.notas = new NotasOctave4();
  }
}

class NotasOctave4 extends NotasOctave {

 constructor() {
   super();
   this.arrayNotes.set("Do", MusicalNoteFrecuency.Do4);
   this.arrayNotes.set("Re", MusicalNoteFrecuency.Re4);
   this.arrayNotes.set("Mi", MusicalNoteFrecuency.Mi4);
   this.arrayNotes.set("Fa", MusicalNoteFrecuency.Fa4);
   this.arrayNotes.set("Sol", MusicalNoteFrecuency.Sol4);
   this.arrayNotes.set("La", MusicalNoteFrecuency.La4);
   this.arrayNotes.set("Si", MusicalNoteFrecuency.Si4);
 }
}

class Octave5 extends Octave {
  constructor() {
   super();
   this.notas = new NotasOctave5();
  }
}

class NotasOctave5 extends NotasOctave {

 constructor() {
   super();
   this.arrayNotes.set("Do", MusicalNoteFrecuency.Do5);
   this.arrayNotes.set("Re", MusicalNoteFrecuency.Re5);
   this.arrayNotes.set("Mi", MusicalNoteFrecuency.Mi5);
   this.arrayNotes.set("Fa", MusicalNoteFrecuency.Fa5);
   this.arrayNotes.set("Sol", MusicalNoteFrecuency.Sol5);
   this.arrayNotes.set("La", MusicalNoteFrecuency.La5);
   this.arrayNotes.set("Si", MusicalNoteFrecuency.Si5);
 }
}

class Octave6 extends Octave {
  constructor() {
   super();
   this.notas = new NotasOctave6();
  }
}

class NotasOctave6 extends NotasOctave {

 constructor() {
   super();
   this.arrayNotes.set("Do", MusicalNoteFrecuency.Do6);
   this.arrayNotes.set("Re", MusicalNoteFrecuency.Re6);
   this.arrayNotes.set("Mi", MusicalNoteFrecuency.Mi6);
   this.arrayNotes.set("Fa", MusicalNoteFrecuency.Fa6);
   this.arrayNotes.set("Sol", MusicalNoteFrecuency.Sol6);
   this.arrayNotes.set("La", MusicalNoteFrecuency.La6);
   this.arrayNotes.set("Si", MusicalNoteFrecuency.Si6);
 }
}

class Octave7 extends Octave {
  constructor() {
   super();
   this.notas = new NotasOctave7();
  }
}

class NotasOctave7 extends NotasOctave {

 constructor() {
   super();
   this.arrayNotes.set("Do", MusicalNoteFrecuency.Do7);
   this.arrayNotes.set("Re", MusicalNoteFrecuency.Re7);
   this.arrayNotes.set("Mi", MusicalNoteFrecuency.Mi7);
   this.arrayNotes.set("Fa", MusicalNoteFrecuency.Fa7);
   this.arrayNotes.set("Sol", MusicalNoteFrecuency.Sol7);
   this.arrayNotes.set("La", MusicalNoteFrecuency.La7);
   this.arrayNotes.set("Si", MusicalNoteFrecuency.Si7);
 }
}

class Octave8 extends Octave {
  constructor() {
   super();
   this.notas = new NotasOctave8();
  }
}

class NotasOctave8 extends NotasOctave {

 constructor() {
   super();
   this.arrayNotes.set("Do", MusicalNoteFrecuency.Do8);
   this.arrayNotes.set("Re", MusicalNoteFrecuency.Re8);
   this.arrayNotes.set("Mi", MusicalNoteFrecuency.Mi8);
   this.arrayNotes.set("Fa", MusicalNoteFrecuency.Fa8);
   this.arrayNotes.set("Sol", MusicalNoteFrecuency.Sol8);
   this.arrayNotes.set("La", MusicalNoteFrecuency.La8);
   this.arrayNotes.set("Si", MusicalNoteFrecuency.Si8);
 }
}

export class Octaves {
  static octaves = [new Octave1(), new Octave2(), new Octave3(), new Octave4(), new Octave5(), new Octave6(), new Octave7(), new Octave8()]

}

export default Octaves;
