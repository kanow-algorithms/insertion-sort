import {SortDirection} from "./Enums";

function insertionSort(elementsList: number[], direction: SortDirection = SortDirection.ASC): void {
    const condition: (comparedElement: number, selectedElement: number) => boolean = direction === SortDirection.ASC ? ascendingCondition : descendingCondition;
    for (let selectedElementIndex: number = 1; selectedElementIndex < elementsList.length; selectedElementIndex++) {
        const key: number = elementsList[selectedElementIndex];
        let comparedElementIndex: number = selectedElementIndex - 1;
        while (comparedElementIndex >= 0 && condition(elementsList[comparedElementIndex], key)) {
            elementsList[comparedElementIndex + 1] = elementsList[comparedElementIndex];
            comparedElementIndex--;
        }
        elementsList[comparedElementIndex + 1] = key;
    }
}

const ascendingCondition: (comparedElement: number, selectedElement: number) => boolean = (comparedElement: number, selectedElement: number) => comparedElement > selectedElement;
const descendingCondition: (comparedElement: number, selectedElement: number) => boolean = (comparedElement: number, selectedElement: number) => comparedElement < selectedElement;
