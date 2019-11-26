import {SortDirection} from "./Enums";

function insertionSort<T>(elementsList: T[], direction: SortDirection = SortDirection.ASC): void {
    for (let selectedElementIndex: number = 1; selectedElementIndex < elementsList.length; selectedElementIndex++) {
        const key: T = elementsList[selectedElementIndex];
        let comparedElementIndex: number = selectedElementIndex - 1;
        while (comparedElementIndex >= 0 && elementsList[comparedElementIndex] > key) {
            elementsList[comparedElementIndex + 1] = elementsList[comparedElementIndex];
            comparedElementIndex--;
        }
        elementsList[comparedElementIndex + 1] = key;
    }
}

const examplerray = [31, 41, 59, 26, 41, 58];
insertionSort(examplerray);
console.log(examplerray);
