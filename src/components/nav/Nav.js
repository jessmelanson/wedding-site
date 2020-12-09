import React, { useState } from 'react';

import NavButton from './NavButton';
import NavMenu from './NavMenu';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <NavButton
                onClick={() => setMenuOpen(true)}
                open={menuOpen}
            />
            <NavMenu onClose={() => setMenuOpen(false)} open={menuOpen} />
        </>
    );
};

export default Nav;