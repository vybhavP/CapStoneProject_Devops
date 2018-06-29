import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from '../components/SearchBar';

configure({ adapter: new Adapter() });

// const props = {searchText: "sample search text"}
describe('<user_login />', () =>{
    it('header', ()=>{
        const searchBarComponent = shallow(<SearchBar />);
        let searchText = 'sample search text'
        // console.log(searchBarComponent.debug())
        // expect(searchBarComponent).toHaveLength(1);
        beforeEach(()=>{
            searchBarComponent.find('Input').simulate('change',
            target: {value : searchText}
            )
        });
        it(' updates the text in state', () =>{
            expect(app.state().text).toEqual(searchText)
        })
    });
});