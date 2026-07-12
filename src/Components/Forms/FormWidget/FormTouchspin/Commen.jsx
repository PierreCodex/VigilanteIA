import React, { Fragment } from 'react';
import { Input, InputGroupText } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';

const Commen = (props) => {

    const Minus = () => {
        if (props.decimal) {
            props.setVal(props.val - 0.25);
        } else if (props.step) {
            props.setVal(props.val - 10);
        } else {
            props.setVal(props.val - 1);
        }
    };
    const Addition = () => {
        if (props.decimal) {
            props.setVal(props.val + 0.25);
        } else if (props.step) {
            props.setVal(props.val + 10);
        } else {
            props.setVal(props.val + 1);
        }
    };
    return (
        <Fragment>

            {props.vertical
                ?
                <Input className="touchspin text-start" type="number" name="quantity" placeholder="80"
                    style={{ display: 'block' }} />
                :
                <div className="input-group bootstrap-touchspin">
                    <Btn attrBtn={{ color: 'primary', className: 'bootstrap-touchspin-down', onClick: Minus }}><i className="fa fa-minus"></i>
                    </Btn>
                    <InputGroupText >{props.pre}</InputGroupText>

                    <Input className="touchspin text-start" type="text" name="quantity"
                        style={{ display: 'block' }} value={props.val} readOnly />

                    {props.post && <InputGroupText>{props.post}</InputGroupText>}

                    <Btn attrBtn={{ color: 'primary btn-square', className: 'bootstrap-touchspin-up', onClick: Addition }}>
                        <i className="fa fa-plus"></i>
                    </Btn>
                </div>}
        </Fragment >
    );
};
export default Commen;