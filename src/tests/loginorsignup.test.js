import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import loginorsignup from '../components/loginorsignup';

configure({ adapter: new Adapter() });

const props = {header: "Header test"}
describe('<loginorsignup />', () =>{
    it('header', ()=>{
        const loginOrSignupComponent = shallow(<loginorsignup />)
        console.log(loginOrSignupComponent.debug())
        expect(loginOrSignupComponent).toHaveLength(1);
    });
});