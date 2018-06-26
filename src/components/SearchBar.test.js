import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from './SearchBar';

configure({ adapter: new Adapter() });

// const props = {header: "Header test"}
describe('<user_login />', () =>{
    it('header', ()=>{
        const searchBarComponent = shallow(<SearchBar />)
        console.log(searchBarComponent.debug())
        expect(searchBarComponent).toHaveLength(1);
    });
});