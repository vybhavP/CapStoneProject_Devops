import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import user_home from '../components/user_home';

configure({ adapter: new Adapter() });

// const props = {header: "Header test"}
describe('<user_home />', () =>{
    it('header', ()=>{
        const userHomeComponent = shallow(<user_home />)
        console.log(userHomeComponent.debug())
        expect(userHomeComponent).toHaveLength(1);
    });
});