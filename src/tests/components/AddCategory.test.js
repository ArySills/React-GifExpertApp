import React from 'react';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";


describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories}/>)

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/>)

    });

    test('debe de mostrarse correctametne', () => {
    
    expect(wrapper).toMatchSnapshot();

    });

    test('debe de cambiar la caja de texto', () => {
      
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value }});

        expect (wrapper.find('p').text().trim()).toBe (value);


    });

    test('no debe de postear la informaion con submit', () => {
      
        wrapper.find('form').simulate('submit', { preventDefault(){}})

        expect( setCategories ).not.toHaveBeenCalled();

    });
    
    test('debe de llamar a setCategories y limpiar la caja de texto', () => {
      
       
        const value = 'Hola Mundo';

        wrapper.find('input').simulate('change', { target: { value }});

        wrapper.find('form').simulate('submit', { preventDefault(){}})

        expect( setCategories ).toHaveBeenCalled();

        expect (wrapper.find('input').prop('value')).toBe ('');

    });
    
    

});
