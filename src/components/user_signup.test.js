import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import user_signup from './user_signup';

configure({ adapter: new Adapter() });

const props = {header: "Header test"}
describe('<user_signup />', () =>{
    it('signup', ()=>{
        const userSignupComponent = shallow(<user_signup />)
        console.log(userSignupComponent.debug())
        expect(userSignupComponent).toHaveLength(1);
    });
});