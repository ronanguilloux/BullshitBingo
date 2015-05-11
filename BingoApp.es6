import {Component, Template, bootstrap,For} from 'angular2/angular2';
import {BingoStore} from 'services/BingoStore';
@Component({
    selector: 'bingo-app',
    services: [
        BingoStore
    ]
})
@Template({
    url: 'templates/bingo.html',
    directives: [For]
})
class BingoApp {

    bingoStore : BingoStore;

    constructor(bingoStore: BingoStore) {
        this.bingoStore = bingoStore;
    }

    add($event,newbingo){
        if($event.which === 13){
            this.bingoStore.add(newbingo.value);
            newbingo.value = '';
        }
    }

    toggleBingoState(bingo){
        bingo.found = !bingo.found;
        console.log(bingo);
    }

}

bootstrap(BingoApp);