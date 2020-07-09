import {dropdown1,dropdown2} from "./survey.js"
import actionListItemsArray from "./actionListItemsArray.js"
import action from "./action.js"

export let actionListItem1 = ""
export let actionListItem2 = ""
export let actionListItem3 = ""

export let actionListIcon1 = ""
export let actionListIcon2 = ""
export let actionListIcon3 = ""

export let actionPointsValue1
export let actionPointsValue2
export let actionPointsValue3

let loadActionList = () => {
    
    //ITEM 1 IS ALWAYS THE ELECTION
    actionListItem1 = actionListItemsArray.election[0].item
    console.log(actionListItem1)
    actionListIcon1 = actionListItemsArray.election[0].icon//object property in actionItemsListArray with url for the respective icon - then in action.js have an array with actionIcon1, actionIcon2, and actionIcon3, setting the src attribute of an img created in the DOM to the right actionIcon
    actionPointsValue1 = actionListItemsArray.election[0].points
    
    let cause2 = dropdown1.value    
    switch (cause2) {
        case 'blm':
            actionListItem2 = actionListItemsArray.blm[0].item
            actionListIcon2 = actionListItemsArray.blm[0].icon
            actionPointsValue2 = actionListItemsArray.blm[0].points
            break;
        case 'environment':
            actionListItem2 = actionListItemsArray.environment[0].item
            actionListIcon2 = actionListItemsArray.environment[0].icon
            actionPointsValue2 = actionListItemsArray.environment[0].points
            break;
        default:
            actionListItem2 = "Take action by selecting a cause you care about in the menu at the top"
        }
    
    let cause3 = dropdown2.value    
    switch (cause3) {
        case 'blm':
            actionListItem3 = actionListItemsArray.blm[0].item
            actionListIcon3 = actionListItemsArray.blm[0].icon
            actionPointsValue3 = actionListItemsArray.blm[0].points
            break;
        case 'environment':
            actionListItem3 = actionListItemsArray.environment[0].item
            actionListIcon3 = actionListItemsArray.environment[0].icon
            actionPointsValue3 = actionListItemsArray.environment[0].points
            break;
        default:
            actionListItem3 = "Take action by selecting a cause you care about in the menu at the top"
        }

        console.log(actionListItem3)
}

export default loadActionList