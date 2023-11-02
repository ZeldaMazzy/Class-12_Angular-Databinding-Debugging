import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(input: string): string {
    const individualWords = input.split(" ");
    individualWords.map(word => {
      const l: number = word.length;
      const firstLetter: string = word[0].toUpperCase();
      const lastLetters: string = word.slice(1, l).toLowerCase();
      return firstLetter + lastLetters
    })

    console.log("transforming");

    return individualWords.join(" ");
  }

}
