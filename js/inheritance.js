class Printer {
    constructor(data) {
        this.data = data;
    }
    log() {
        console.log('Data from Log ' + this.data);
    }
    print() {
        console.log('Printing ' + this.data);
    }
}

class PrintPDF extends Printer {
    constructor(data) {
        super(data);
    }
    print() {
        console.log('Printing PDF ' + this.data);
    }
}

class PrintHTML extends Printer {
    constructor(data) {
        super(data);
    }
    print() {
        console.log('Pringint HTML ' + this.data);
    }
}

class TestPrint extends Printer {
    constructor(data) {
        super(data);
    }
    print() {
        console.log(`Prining Text ${this.data}`);
    }
}

const printPDF = new PrintPDF('Invoice');
printPDF.print();
printPDF.log();

const printHTML = new PrintHTML('Report');
printHTML.print();
printHTML.log();
