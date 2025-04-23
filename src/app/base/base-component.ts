import { Injectable, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export abstract class BaseComponent implements OnDestroy {
    private _destroy$ = new Subject<any>();

    constructor(){
        
    }

    get destroy$() {
        if (!this._destroy$) {
          this._destroy$ = new Subject();
        }
        return this._destroy$;
      }

    ngOnDestroy(): void {
     if (this._destroy$) {
        this._destroy$.next(true);
        this._destroy$.complete();
     }
    }
}