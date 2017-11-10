import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'sort',
    pure: false
})
export class sortPipe implements PipeTransform{
    transform(value: Array<string>, sortOrder:string){
        console.log("sortOrder: ", sortOrder);
        if(!value)
            return null;
        return value.sort((a, b)=>{
            
            if(a['first_name'] < b['first_name'])
                return -1;
            if (a['first_name'] > b['first_name'])
                return 1;
                
                return 0;
        });
        

    }
}