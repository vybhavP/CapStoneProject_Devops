import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CoursesRow from '../components/CoursesRow';

configure({ adapter: new Adapter() });

const props = {}
describe('<CoursesRow />', () =>{
    it('course row ', ()=>{
        const courseRowComponent = shallow(<CoursesRow />)
        console.log(courseRowComponent.debug())
        expect(courseRowComponent).toHaveLength(1);
    });
});