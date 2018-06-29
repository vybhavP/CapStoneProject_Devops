import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import user_lupdate_courseogin from '../components/update_course';

configure({ adapter: new Adapter() });

// const props = {header: "Header test"}
describe('<user_login />', () =>{
    it('header', ()=>{
        const updateCourseComponent = shallow(<update_course />)
        console.log(updateCourseComponent.debug())
        expect(updateCourseComponent).toHaveLength(1);
    });
});