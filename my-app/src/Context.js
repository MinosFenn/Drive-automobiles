import React, { Component } from 'react'
import items from './data'
const CarContext = React.createContext();
// <CarContext.Provider value={'hello}
class CarProvider extends Component {
    state={
        Cars: [],
        sortedCars:[],
        featuredCars:[],
        loading:true
    };
    //getData

    // show card on homepage if featured is true
   // TODO:a revoir
    componentDidMount(){
        let cars = this.formatData(items);
        console.log(cars)
let featuredCars = cars.filter(car => car.featured === true);
this.setState({
    cars,
    featuredCars,
    sortedCars: cars,
    loading: false
});
    }
    formatData(items){
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let car = {...item.fields, images, id};
            return car;
        });
        return tempItems
    }
    render() {
        return (
        <CarContext.Provider value={{...this.state}}>
{this.props.children}
        </CarContext.Provider>
        );
    }
}

const CarConsumer = CarContext.Consumer

export {CarProvider, CarConsumer, CarContext}