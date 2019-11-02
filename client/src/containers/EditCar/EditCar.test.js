import React from "react";
import EditCar from "./EditCar";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("EditCar", () => {
    const EditCarShallow = shallow(<EditCar />, { disableLifecycleMethods: true });

    it("should have default values", () => {
        expect(EditCarShallow.state().model).toEqual("");
        expect(EditCarShallow.state().color).toEqual("");
        expect(EditCarShallow.state().year).toEqual("");
        expect(EditCarShallow.state().imageURL).toEqual("");
        expect(EditCarShallow.state()._id).toEqual("");
    });

    describe("car model input", () => {
        it("calls handleInputChange", () => {
            const handleInputChange = jest.fn();
            EditCarShallow.find("#edit-car-model-input").simulate("change", {target: {name: "model", value: "banan"}});
            expect(handleInputChange).toHaveBeenCalled();
        });
        it("should update state with the name and value passed to handleInputChange", () => {

        });
    });
});