import {SortDirection} from "./Enums";

function insertionSort<T>(elementsList: T[], direction: SortDirection = SortDirection.ASC): void {
    const condition: <T>(comparedElement: T, selectedElement: T) => boolean = direction === SortDirection.ASC ? ascendingCondition : descendingCondition;
    for (let selectedElementIndex: number = 1; selectedElementIndex < elementsList.length; selectedElementIndex++) {
        const key: T = elementsList[selectedElementIndex];
        let comparedElementIndex: number = selectedElementIndex - 1;
        while (comparedElementIndex >= 0 && condition(elementsList[comparedElementIndex], key)) {
            elementsList[comparedElementIndex + 1] = elementsList[comparedElementIndex];
            comparedElementIndex--;
        }
        elementsList[comparedElementIndex + 1] = key;
    }
}

const ascendingCondition: <T>(comparedElement: T, selectedElement: T) => boolean = <T>(comparedElement: T, selectedElement: T) => comparedElement > selectedElement;
const descendingCondition: <T>(comparedElement: T, selectedElement: T) => boolean = <T>(comparedElement: T, selectedElement: T) => comparedElement < selectedElement;
