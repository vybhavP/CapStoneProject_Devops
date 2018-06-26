import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EditableCell from './EditableCell';

configure({ adapter: new Adapter() });

const props = {header: "Header test"}
describe('<EditableCell />', () =>{
    it('editable cell', ()=>{
        const editableCellComponent = shallow(<EditableCell />)
        console.log(editableCellComponent.debug())
        expect(editableCellComponent).toHaveLength(1);
    });
});