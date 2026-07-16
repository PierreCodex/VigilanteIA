import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { H6, Image, P } from '../../AbstractElements';
import { esAdmin, usuarioActual } from '../../api/vigilanteApi';
import man from '/src/assets/images/dashboard/1.png';

const Profile = () => {
    const user = usuarioActual();
    const nombre = user?.nombre || user?.email || 'Usuario';
    const rol = esAdmin() ? 'Administrador' : 'Dueño de tienda';

    return (
        <Fragment>
            <div className="sidebar-user text-center">
                <Link to={`/stand`}>
                    <Image attrImage={{ className: 'img-90 rounded-circle', src: man, alt: '' }} />
                    <H6 attrH6={{ className: 'mt-3 f-14 f-w-600' }} >{nombre}</H6>
                </Link>
                <P attrPara={{ className: 'mb-0 font-roboto' }} >{rol}</P>
            </div>
        </Fragment >
    );
};

export default Profile;