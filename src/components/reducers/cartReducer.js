import img1 from '../img/img1.png'
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import img4 from '../img/img4.png';
import img5 from '../img/img5.png';
import img6 from '../img/img6.png';
import img7 from '../img/img7.png';
import img8 from '../img/img8.png';
import img9 from '../img/img9.png';
import img10 from '../img/img10.png';
import img11 from '../img/img11.png';
import img12 from '../img/img12.png';
import img13 from '../img/img13.png';
import img14 from '../img/img14.png';
import img15 from '../img/img15.png';
import img16 from '../img/img16.png';
import img17 from '../img/img17.png';
import img18 from '../img/img18.png';
import img19 from '../img/img19.png';
import img20 from '../img/img20.png';
import img21 from '../img/img21.png';
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY} from '../actions/action-types/cart-actions'; 


const initState = {

    items:[
        {id:"1",
            img:img1,
            title:"Apple Air Buds",
            detail:"Sky Blue",
            price: 529,
            summary:"Not all data and data sources are equal. They vary based on dimensions like granularity and scope. Consider all the tools available to you and use those that will generate data aligned with your business goal. Once you have access to a data source, identify abnormalities in data.",
            description:"Each combination of data type and methodology requires a statement of assumptions in order to correctly assess the situation at hand. Identify whether business objectives are being measured in a way that is compatible with Meta’s measurement tools and whether there are any potential data blind spots. For example, if you are measuring online conversions, make sure you have the correct data source in place (Meta pixel) and it is implemented correctly. If you do not have a Meta pixel on your website, then you will not be able to use Attribution or Lift solutions. To run an effective experiment, you should first choose a hypothesis, or question, that you want your experiment to answer. A strong, well-structured hypothesis can be confirmed or rejected through testing and can lead to valuable insights.A test hypothesis is a proposed explanation for an observation you can test, usually in the form of an if/then statement. While a hypothesis could be a subjective assumption, a test hypothesis includes a null and an alternative hypothesis. The objective is to test if the null can be rejected and the alternative can be accepted."
        },
        {id:"2",
            img: img2,
        title:"Apple Air Buds",
        detail:"Bright Orange",
        price: 39,
        summary:"Not all data and data sources are equal. They vary based on dimensions like granularity and scope. Consider all the tools available to you and use those that will generate data aligned with your business goal. Once you have access to a data source, identify abnormalities in data.",
        description:"Each combination of data type and methodology requires a statement of assumptions in order to correctly assess the situation at hand. Identify whether business objectives are being measured in a way that is compatible with Meta’s measurement tools and whether there are any potential data blind spots. For example, if you are measuring online conversions, make sure you have the correct data source in place (Meta pixel) and it is implemented correctly. If you do not have a Meta pixel on your website, then you will not be able to use Attribution or Lift solutions. To run an effective experiment, you should first choose a hypothesis, or question, that you want your experiment to answer. A strong, well-structured hypothesis can be confirmed or rejected through testing and can lead to valuable insights.A test hypothesis is a proposed explanation for an observation you can test, usually in the form of an if/then statement. While a hypothesis could be a subjective assumption, a test hypothesis includes a null and an alternative hypothesis. The objective is to test if the null can be rejected and the alternative can be accepted."
        },
        {id:"3",
            img: img3,
        title:"Apple Air Buds",
        detail:"Milky White",
        price: 619,
        summary:"Not all data and data sources are equal. They vary based on dimensions like granularity and scope. Consider all the tools available to you and use those that will generate data aligned with your business goal. Once you have access to a data source, identify abnormalities in data.",
        description:"Each combination of data type and methodology requires a statement of assumptions in order to correctly assess the situation at hand. Identify whether business objectives are being measured in a way that is compatible with Meta’s measurement tools and whether there are any potential data blind spots. For example, if you are measuring online conversions, make sure you have the correct data source in place (Meta pixel) and it is implemented correctly. If you do not have a Meta pixel on your website, then you will not be able to use Attribution or Lift solutions. To run an effective experiment, you should first choose a hypothesis, or question, that you want your experiment to answer. A strong, well-structured hypothesis can be confirmed or rejected through testing and can lead to valuable insights.A test hypothesis is a proposed explanation for an observation you can test, usually in the form of an if/then statement. While a hypothesis could be a subjective assumption, a test hypothesis includes a null and an alternative hypothesis. The objective is to test if the null can be rejected and the alternative can be accepted."
        },
        { id:"4",
            img:img4,
            title:"Apple Watch",
            detail:"Silver",
            price: 619,
            summary:"Not all data and data sources are equal. They vary based on dimensions like granularity and scope. Consider all the tools available to you and use those that will generate data aligned with your business goal. Once you have access to a data source, identify abnormalities in data.",
            description:"Each combination of data type and methodology requires a statement of assumptions in order to correctly assess the situation at hand. Identify whether business objectives are being measured in a way that is compatible with Meta’s measurement tools and whether there are any potential data blind spots. For example, if you are measuring online conversions, make sure you have the correct data source in place (Meta pixel) and it is implemented correctly. If you do not have a Meta pixel on your website, then you will not be able to use Attribution or Lift solutions. To run an effective experiment, you should first choose a hypothesis, or question, that you want your experiment to answer. A strong, well-structured hypothesis can be confirmed or rejected through testing and can lead to valuable insights.A test hypothesis is a proposed explanation for an observation you can test, usually in the form of an if/then statement. While a hypothesis could be a subjective assumption, a test hypothesis includes a null and an alternative hypothesis. The objective is to test if the null can be rejected and the alternative can be accepted."
        },
        {  id:"5",
            img: img5,
            title:"Apple Watch",
            detail:"Silver",
            price: 619,
            summary:"Not all data and data sources are equal. They vary based on dimensions like granularity and scope. Consider all the tools available to you and use those that will generate data aligned with your business goal. Once you have access to a data source, identify abnormalities in data.",
            description:"Each combination of data type and methodology requires a statement of assumptions in order to correctly assess the situation at hand. Identify whether business objectives are being measured in a way that is compatible with Meta’s measurement tools and whether there are any potential data blind spots. For example, if you are measuring online conversions, make sure you have the correct data source in place (Meta pixel) and it is implemented correctly. If you do not have a Meta pixel on your website, then you will not be able to use Attribution or Lift solutions. To run an effective experiment, you should first choose a hypothesis, or question, that you want your experiment to answer. A strong, well-structured hypothesis can be confirmed or rejected through testing and can lead to valuable insights.A test hypothesis is a proposed explanation for an observation you can test, usually in the form of an if/then statement. While a hypothesis could be a subjective assumption, a test hypothesis includes a null and an alternative hypothesis. The objective is to test if the null can be rejected and the alternative can be accepted."
        },
        {  id:"6",
            img:img6,
            title:"Apple Watch",
            detail:"Silver",
            price: 619,
            summary:"Not all data and data sources are equal. They vary based on dimensions like granularity and scope. Consider all the tools available to you and use those that will generate data aligned with your business goal. Once you have access to a data source, identify abnormalities in data.",
            description:"Each combination of data type and methodology requires a statement of assumptions in order to correctly assess the situation at hand. Identify whether business objectives are being measured in a way that is compatible with Meta’s measurement tools and whether there are any potential data blind spots. For example, if you are measuring online conversions, make sure you have the correct data source in place (Meta pixel) and it is implemented correctly. If you do not have a Meta pixel on your website, then you will not be able to use Attribution or Lift solutions. To run an effective experiment, you should first choose a hypothesis, or question, that you want your experiment to answer. A strong, well-structured hypothesis can be confirmed or rejected through testing and can lead to valuable insights.A test hypothesis is a proposed explanation for an observation you can test, usually in the form of an if/then statement. While a hypothesis could be a subjective assumption, a test hypothesis includes a null and an alternative hypothesis. The objective is to test if the null can be rejected and the alternative can be accepted."
        },
        {  id:"7",
            img: img7,
            title:"Apple Watch",
            detail:"Rose Red",
            price: 619,
            summary:"Not all data and data sources are equal. They vary based on dimensions like granularity and scope. Consider all the tools available to you and use those that will generate data aligned with your business goal. Once you have access to a data source, identify abnormalities in data.",
            description:"Each combination of data type and methodology requires a statement of assumptions in order to correctly assess the situation at hand. Identify whether business objectives are being measured in a way that is compatible with Meta’s measurement tools and whether there are any potential data blind spots. For example, if you are measuring online conversions, make sure you have the correct data source in place (Meta pixel) and it is implemented correctly. If you do not have a Meta pixel on your website, then you will not be able to use Attribution or Lift solutions. To run an effective experiment, you should first choose a hypothesis, or question, that you want your experiment to answer. A strong, well-structured hypothesis can be confirmed or rejected through testing and can lead to valuable insights.A test hypothesis is a proposed explanation for an observation you can test, usually in the form of an if/then statement. While a hypothesis could be a subjective assumption, a test hypothesis includes a null and an alternative hypothesis. The objective is to test if the null can be rejected and the alternative can be accepted."
        },
        {  id:"8",
            img: img8,
            title:"Apple Watch",
            detail:"Gold",
            price: 619,
            summary:"Not all data and data sources are equal. They vary based on dimensions like granularity and scope. Consider all the tools available to you and use those that will generate data aligned with your business goal. Once you have access to a data source, identify abnormalities in data.",
            description:"Each combination of data type and methodology requires a statement of assumptions in order to correctly assess the situation at hand. Identify whether business objectives are being measured in a way that is compatible with Meta’s measurement tools and whether there are any potential data blind spots. For example, if you are measuring online conversions, make sure you have the correct data source in place (Meta pixel) and it is implemented correctly. If you do not have a Meta pixel on your website, then you will not be able to use Attribution or Lift solutions. To run an effective experiment, you should first choose a hypothesis, or question, that you want your experiment to answer. A strong, well-structured hypothesis can be confirmed or rejected through testing and can lead to valuable insights.A test hypothesis is a proposed explanation for an observation you can test, usually in the form of an if/then statement. While a hypothesis could be a subjective assumption, a test hypothesis includes a null and an alternative hypothesis. The objective is to test if the null can be rejected and the alternative can be accepted."
        },
        {id:"9",
        img:img9,
        title:"iPad Pro",
        detail:"Silver Grey",
        price: 2199,
        summary:"Not all data and data sources are equal. They vary based on dimensions like granularity and scope. Consider all the tools available to you and use those that will generate data aligned with your business goal. Once you have access to a data source, identify abnormalities in data.",
        description:"Each combination of data type and methodology requires a statement of assumptions in order to correctly assess the situation at hand. Identify whether business objectives are being measured in a way that is compatible with Meta’s measurement tools and whether there are any potential data blind spots. For example, if you are measuring online conversions, make sure you have the correct data source in place (Meta pixel) and it is implemented correctly. If you do not have a Meta pixel on your website, then you will not be able to use Attribution or Lift solutions. To run an effective experiment, you should first choose a hypothesis, or question, that you want your experiment to answer. A strong, well-structured hypothesis can be confirmed or rejected through testing and can lead to valuable insights.A test hypothesis is a proposed explanation for an observation you can test, usually in the form of an if/then statement. While a hypothesis could be a subjective assumption, a test hypothesis includes a null and an alternative hypothesis. The objective is to test if the null can be rejected and the alternative can be accepted."
        },
        {id:"10",
            img: img10,
            title:"iPad Pro Max",
            detail:"Silver Grey",
        price: 199,
        summary:"Not all data and data sources are equal. They vary based on dimensions like granularity and scope. Consider all the tools available to you and use those that will generate data aligned with your business goal. Once you have access to a data source, identify abnormalities in data.",
        description:"Each combination of data type and methodology requires a statement of assumptions in order to correctly assess the situation at hand. Identify whether business objectives are being measured in a way that is compatible with Meta’s measurement tools and whether there are any potential data blind spots. For example, if you are measuring online conversions, make sure you have the correct data source in place (Meta pixel) and it is implemented correctly. If you do not have a Meta pixel on your website, then you will not be able to use Attribution or Lift solutions. To run an effective experiment, you should first choose a hypothesis, or question, that you want your experiment to answer. A strong, well-structured hypothesis can be confirmed or rejected through testing and can lead to valuable insights.A test hypothesis is a proposed explanation for an observation you can test, usually in the form of an if/then statement. While a hypothesis could be a subjective assumption, a test hypothesis includes a null and an alternative hypothesis. The objective is to test if the null can be rejected and the alternative can be accepted."
        },
        { id:"11",
            img: img11,
            title:"iPad Mini",
            detail:"Silver Grey",
        price: 1499,
        summary:"Not all data and data sources are equal. They vary based on dimensions like granularity and scope. Consider all the tools available to you and use those that will generate data aligned with your business goal. Once you have access to a data source, identify abnormalities in data.",
        description:"Each combination of data type and methodology requires a statement of assumptions in order to correctly assess the situation at hand. Identify whether business objectives are being measured in a way that is compatible with Meta’s measurement tools and whether there are any potential data blind spots. For example, if you are measuring online conversions, make sure you have the correct data source in place (Meta pixel) and it is implemented correctly. If you do not have a Meta pixel on your website, then you will not be able to use Attribution or Lift solutions. To run an effective experiment, you should first choose a hypothesis, or question, that you want your experiment to answer. A strong, well-structured hypothesis can be confirmed or rejected through testing and can lead to valuable insights.A test hypothesis is a proposed explanation for an observation you can test, usually in the form of an if/then statement. While a hypothesis could be a subjective assumption, a test hypothesis includes a null and an alternative hypothesis. The objective is to test if the null can be rejected and the alternative can be accepted."
        },
        {id:"12",
            img:img12,
            title:"iPad Mini",
            detail:"Milky White",
        price: 2599,
        summary:"Not all data and data sources are equal. They vary based on dimensions like granularity and scope. Consider all the tools available to you and use those that will generate data aligned with your business goal. Once you have access to a data source, identify abnormalities in data.",
        description:"Each combination of data type and methodology requires a statement of assumptions in order to correctly assess the situation at hand. Identify whether business objectives are being measured in a way that is compatible with Meta’s measurement tools and whether there are any potential data blind spots. For example, if you are measuring online conversions, make sure you have the correct data source in place (Meta pixel) and it is implemented correctly. If you do not have a Meta pixel on your website, then you will not be able to use Attribution or Lift solutions. To run an effective experiment, you should first choose a hypothesis, or question, that you want your experiment to answer. A strong, well-structured hypothesis can be confirmed or rejected through testing and can lead to valuable insights.A test hypothesis is a proposed explanation for an observation you can test, usually in the form of an if/then statement. While a hypothesis could be a subjective assumption, a test hypothesis includes a null and an alternative hypothesis. The objective is to test if the null can be rejected and the alternative can be accepted."
        },
        {id:"13",
            img:img13,
            title:"iPad ",
            detail:"Light Grey",
        price: 2599,
        summary:"Not all data and data sources are equal. They vary based on dimensions like granularity and scope. Consider all the tools available to you and use those that will generate data aligned with your business goal. Once you have access to a data source, identify abnormalities in data.",
        description:"Each combination of data type and methodology requires a statement of assumptions in order to correctly assess the situation at hand. Identify whether business objectives are being measured in a way that is compatible with Meta’s measurement tools and whether there are any potential data blind spots. For example, if you are measuring online conversions, make sure you have the correct data source in place (Meta pixel) and it is implemented correctly. If you do not have a Meta pixel on your website, then you will not be able to use Attribution or Lift solutions. To run an effective experiment, you should first choose a hypothesis, or question, that you want your experiment to answer. A strong, well-structured hypothesis can be confirmed or rejected through testing and can lead to valuable insights.A test hypothesis is a proposed explanation for an observation you can test, usually in the form of an if/then statement. While a hypothesis could be a subjective assumption, a test hypothesis includes a null and an alternative hypothesis. The objective is to test if the null can be rejected and the alternative can be accepted."
        },
        {id:"14",
            img:img14,
        title:"Apple iMac",
        detail:"Silver",
        price: 2599,
        summary:"Not all data and data sources are equal. They vary based on dimensions like granularity and scope. Consider all the tools available to you and use those that will generate data aligned with your business goal. Once you have access to a data source, identify abnormalities in data.",
        description:"Each combination of data type and methodology requires a statement of assumptions in order to correctly assess the situation at hand. Identify whether business objectives are being measured in a way that is compatible with Meta’s measurement tools and whether there are any potential data blind spots. For example, if you are measuring online conversions, make sure you have the correct data source in place (Meta pixel) and it is implemented correctly. If you do not have a Meta pixel on your website, then you will not be able to use Attribution or Lift solutions. To run an effective experiment, you should first choose a hypothesis, or question, that you want your experiment to answer. A strong, well-structured hypothesis can be confirmed or rejected through testing and can lead to valuable insights.A test hypothesis is a proposed explanation for an observation you can test, usually in the form of an if/then statement. While a hypothesis could be a subjective assumption, a test hypothesis includes a null and an alternative hypothesis. The objective is to test if the null can be rejected and the alternative can be accepted."
        },
        {id:"15",
            img:img15,
            title:"Apple iMac",
            detail:"Silver",
        price: 2599,
        summary:"Not all data and data sources are equal. They vary based on dimensions like granularity and scope. Consider all the tools available to you and use those that will generate data aligned with your business goal. Once you have access to a data source, identify abnormalities in data.",
        description:"Each combination of data type and methodology requires a statement of assumptions in order to correctly assess the situation at hand. Identify whether business objectives are being measured in a way that is compatible with Meta’s measurement tools and whether there are any potential data blind spots. For example, if you are measuring online conversions, make sure you have the correct data source in place (Meta pixel) and it is implemented correctly. If you do not have a Meta pixel on your website, then you will not be able to use Attribution or Lift solutions. To run an effective experiment, you should first choose a hypothesis, or question, that you want your experiment to answer. A strong, well-structured hypothesis can be confirmed or rejected through testing and can lead to valuable insights.A test hypothesis is a proposed explanation for an observation you can test, usually in the form of an if/then statement. While a hypothesis could be a subjective assumption, a test hypothesis includes a null and an alternative hypothesis. The objective is to test if the null can be rejected and the alternative can be accepted."
        },
        {id:"16",
            img:img16,
            title:"Apple Macbook",
            detail:"Silver",
        price: 2599,
        summary:"Not all data and data sources are equal. They vary based on dimensions like granularity and scope. Consider all the tools available to you and use those that will generate data aligned with your business goal. Once you have access to a data source, identify abnormalities in data.",
        description:"Each combination of data type and methodology requires a statement of assumptions in order to correctly assess the situation at hand. Identify whether business objectives are being measured in a way that is compatible with Meta’s measurement tools and whether there are any potential data blind spots. For example, if you are measuring online conversions, make sure you have the correct data source in place (Meta pixel) and it is implemented correctly. If you do not have a Meta pixel on your website, then you will not be able to use Attribution or Lift solutions. To run an effective experiment, you should first choose a hypothesis, or question, that you want your experiment to answer. A strong, well-structured hypothesis can be confirmed or rejected through testing and can lead to valuable insights.A test hypothesis is a proposed explanation for an observation you can test, usually in the form of an if/then statement. While a hypothesis could be a subjective assumption, a test hypothesis includes a null and an alternative hypothesis. The objective is to test if the null can be rejected and the alternative can be accepted."
        },
        {id:"17",
            img:img17,
            title:"Apple Macbook Pro",
            detail:"Silver",
        price: 2599,
        summary:"Not all data and data sources are equal. They vary based on dimensions like granularity and scope. Consider all the tools available to you and use those that will generate data aligned with your business goal. Once you have access to a data source, identify abnormalities in data.",
        description:"Each combination of data type and methodology requires a statement of assumptions in order to correctly assess the situation at hand. Identify whether business objectives are being measured in a way that is compatible with Meta’s measurement tools and whether there are any potential data blind spots. For example, if you are measuring online conversions, make sure you have the correct data source in place (Meta pixel) and it is implemented correctly. If you do not have a Meta pixel on your website, then you will not be able to use Attribution or Lift solutions. To run an effective experiment, you should first choose a hypothesis, or question, that you want your experiment to answer. A strong, well-structured hypothesis can be confirmed or rejected through testing and can lead to valuable insights.A test hypothesis is a proposed explanation for an observation you can test, usually in the form of an if/then statement. While a hypothesis could be a subjective assumption, a test hypothesis includes a null and an alternative hypothesis. The objective is to test if the null can be rejected and the alternative can be accepted."
        },
        {id:"18",
            img:img18,
            title:"iPhone 12 Pro",
            detail:"Charcoal",
        price: 2599,
        summary:"Not all data and data sources are equal. They vary based on dimensions like granularity and scope. Consider all the tools available to you and use those that will generate data aligned with your business goal. Once you have access to a data source, identify abnormalities in data.",
        description:"Each combination of data type and methodology requires a statement of assumptions in order to correctly assess the situation at hand. Identify whether business objectives are being measured in a way that is compatible with Meta’s measurement tools and whether there are any potential data blind spots. For example, if you are measuring online conversions, make sure you have the correct data source in place (Meta pixel) and it is implemented correctly. If you do not have a Meta pixel on your website, then you will not be able to use Attribution or Lift solutions. To run an effective experiment, you should first choose a hypothesis, or question, that you want your experiment to answer. A strong, well-structured hypothesis can be confirmed or rejected through testing and can lead to valuable insights.A test hypothesis is a proposed explanation for an observation you can test, usually in the form of an if/then statement. While a hypothesis could be a subjective assumption, a test hypothesis includes a null and an alternative hypothesis. The objective is to test if the null can be rejected and the alternative can be accepted."
        },
        {id:"19",
            img:img19,
        title:"iPhone 12",
        detail:"Milky White",
        price: 2599,
        summary:"Not all data and data sources are equal. They vary based on dimensions like granularity and scope. Consider all the tools available to you and use those that will generate data aligned with your business goal. Once you have access to a data source, identify abnormalities in data.",
        description:"Each combination of data type and methodology requires a statement of assumptions in order to correctly assess the situation at hand. Identify whether business objectives are being measured in a way that is compatible with Meta’s measurement tools and whether there are any potential data blind spots. For example, if you are measuring online conversions, make sure you have the correct data source in place (Meta pixel) and it is implemented correctly. If you do not have a Meta pixel on your website, then you will not be able to use Attribution or Lift solutions. To run an effective experiment, you should first choose a hypothesis, or question, that you want your experiment to answer. A strong, well-structured hypothesis can be confirmed or rejected through testing and can lead to valuable insights.A test hypothesis is a proposed explanation for an observation you can test, usually in the form of an if/then statement. While a hypothesis could be a subjective assumption, a test hypothesis includes a null and an alternative hypothesis. The objective is to test if the null can be rejected and the alternative can be accepted."
        },
        {id:"20",
            img:img20,
        title:"iPhone 12",
        detail:"Subway Blue",
        price: 2599,
        summary:"Not all data and data sources are equal. They vary based on dimensions like granularity and scope. Consider all the tools available to you and use those that will generate data aligned with your business goal. Once you have access to a data source, identify abnormalities in data.",
        description:"Each combination of data type and methodology requires a statement of assumptions in order to correctly assess the situation at hand. Identify whether business objectives are being measured in a way that is compatible with Meta’s measurement tools and whether there are any potential data blind spots. For example, if you are measuring online conversions, make sure you have the correct data source in place (Meta pixel) and it is implemented correctly. If you do not have a Meta pixel on your website, then you will not be able to use Attribution or Lift solutions. To run an effective experiment, you should first choose a hypothesis, or question, that you want your experiment to answer. A strong, well-structured hypothesis can be confirmed or rejected through testing and can lead to valuable insights.A test hypothesis is a proposed explanation for an observation you can test, usually in the form of an if/then statement. While a hypothesis could be a subjective assumption, a test hypothesis includes a null and an alternative hypothesis. The objective is to test if the null can be rejected and the alternative can be accepted."
        },
        {id:"21",
            img:img21,
        title:"iPhone 12",
        detail:"Rose Red",
        price: 2599,
        summary:"Not all data and data sources are equal. They vary based on dimensions like granularity and scope. Consider all the tools available to you and use those that will generate data aligned with your business goal. Once you have access to a data source, identify abnormalities in data.",
        description:"Each combination of data type and methodology requires a statement of assumptions in order to correctly assess the situation at hand. Identify whether business objectives are being measured in a way that is compatible with Meta’s measurement tools and whether there are any potential data blind spots. For example, if you are measuring online conversions, make sure you have the correct data source in place (Meta pixel) and it is implemented correctly. If you do not have a Meta pixel on your website, then you will not be able to use Attribution or Lift solutions. To run an effective experiment, you should first choose a hypothesis, or question, that you want your experiment to answer. A strong, well-structured hypothesis can be confirmed or rejected through testing and can lead to valuable insights.A test hypothesis is a proposed explanation for an observation you can test, usually in the form of an if/then statement. While a hypothesis could be a subjective assumption, a test hypothesis includes a null and an alternative hypothesis. The objective is to test if the null can be rejected and the alternative can be accepted."
        }
    ],
    addedItems:[],
    total:0,
    addressFormData: "",
    paymentFormData:"",
    paymentCards:[]
}

const cartReducer = (state=initState, action)=>{


    if(action.type === ADD_TO_CART){
    let addedItem = state.items.find(item =>item.id===action.id);
    let existed_item = state.addedItems.find(item=> action.id === item.id);
    if(existed_item){
        addedItem.quantity +=1
        return{
            ...state, 
            total: state.total + addedItem.price
        }
    }
    else{
        addedItem.quantity =1;
        let newTotal = state.total + addedItem.price
        return{
            ...state,
            addedItems:[...state.addedItems, addedItem],
            total: newTotal
        }
    }
    }
    if(action.type === REMOVE_ITEM){

        let itemToRemove = state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        let newTotal = state.total - (itemToRemove.price* itemToRemove.quantity)
        console.log(itemToRemove)
        return{
            ...state, 
            addedItems: new_items,
            total: newTotal
        }
    }
    if(action.type === ADD_QUANTITY){

        let addedItem = state.items.find(item=> item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return{
            ...state, 
            total: newTotal
        }
    }
    if(action.type ===SUB_QUANTITY){

        let addedItem = state.items.find(item=> item.id=== action.id)
        if(addedItem.quantity === 1){

            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total -addedItem.price 
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else{
            addedItem.quantity -=1
            let newTotal = state.total -addedItem.price

            return{
                ...state,
                total: newTotal
            }
        }
    }
    if(action.type=== 'UPDATE_ADDRESS_DATA'){

        return{
            ...state, 
            addressFormData: action.payload
        }
    }
    if(action.type=== 'UPDATE_PAYMENT_DATA'){

        return{
            ...state, 
            paymentFormData: action.payload
        }
    }
    if(action.type=== 'UPDATE_PAYMENT_CARDS'){

        return{
            ...state, 
            paymentCards: [...state.paymentCards, action.payload]
        }
    }

    if(action.type=== 'CLEAR_CART'){

        return{
            ...state, 
            addedItems: action.payload,
            total:0
        }
    }
   
     return state;

}

export default cartReducer;