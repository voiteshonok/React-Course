import './BrowseMenu.css'


export function BrowseMenu() {
    return (
        <div className='browseMenu'>
            <div className='browseMenu__title'>Browse our menu</div>
            <div className='browseMenu__text'>Use our menu to place an order online, or <span className="tooltip">phone<span className="tooltiptext">+375775778</span></span> our store to place a pickup order. Fast and fresh food.</div>
            <div className='browseMenu__buttons'>
                <button className='browseMenu_buttons-desert' type="button">Desert</button>
                <button className='browseMenu_buttons-dinner' type="button">Dinner</button>
                <button className='browseMenu_buttons-breakfast' type="button">Breakfast</button>
            </div>

        </div>
    )
}