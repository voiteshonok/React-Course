import './BrowseMenu.css'


export function BrowseMenu() {
    return (
        <div className='BrowseMenu'>
            <div className='BrowseMenu__title'>Browse our menu</div>
            <div className='BrowseMenu__text'>Use our menu to place an order online, or <span className="tooltip">phone<span className="tooltiptext">+375775778</span></span> our store to place a pickup order. Fast and fresh food.</div>
            <div className='BrowseMenu__buttons'>
                <button className='BrowseMenu_buttons-desert' type="button">Desert</button>
                <button className='BrowseMenu_buttons-dinner' type="button">Dinner</button>
                <button className='BrowseMenu_buttons-breakfast' type="button">Breakfast</button>
            </div>

        </div>
    )
}