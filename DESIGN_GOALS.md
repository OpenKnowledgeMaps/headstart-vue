# Stakeholders and Design Goals

## Stakeholders
The stakeholders in the Open Knowledge Maps project include:
- End users
- Developers
- Designers
- Maintainers
- Deployers
- Users of Head Start as a library

## Design Goals
- The project should work and performs well on all desktop-based platforms and browsers, and not exhibit bad performance on low-powered devices.
- It should be easy to introduce new functionality, setups (e.g. BASE, PubMed, VIPER, CRIS Vis), modes (e.g. timeline mode, upcoming mobile mode) and interactions without breaking existing functionality.
- It should be easy for volunteers to get on board.
- It should be easily configured and deployed in production settings
Framework.
- Must run on low-powered machines and mobile devices with acceptable performance
- Must run on all modern browser engines with comparable performance (Gecko/Paleo, Webkit/Blink, Edge).
- Test-driven development.
- Use programming patterns that facilitate many different setups (e.g. BASE, PubMed, VIPER, CRIS Vis) and modes (e.g. timeline mode, upcoming mobile mode)
Clear separation of different setups (e.g. BASE, PubMed, VIPER, CRIS Vis) and modes (e.g. timeline mode, upcoming mobile mode).
- The design should make it easy to swap out the underlying graphical representation. For example, for the editing mode, canvas may be a much better choice than svg.
- It should be easy for designers to make changes to Head Start without editing JavaScript files.
- The SASS Stylesheets should be separated from JavaScript.
- There should be clear separation between backend and frontend, no backend required for frontend design and development.
- Inline documentation of code when needed.
- Watch on changes when developing (automatic builds for development).
