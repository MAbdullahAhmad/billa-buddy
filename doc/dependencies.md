# Tech Set

Used dependencies in prolog-project.

- **Frontend**: ReactJS
    - JSX (HTML-Like) Structure
    - CSS styling
- **Backend**: Laravel (PHP Framework)
- **Database**: MySQL (Using Elequent ORM)

## Neo4J Implementation

- **Elequent ORM**: <span style="color: orangered; font-weight: bold">FAILED</span>
    - Cannot use `vinelab/neoeloquent`
    - Reasom: not compatible with new versions
    - And not maintained over a long period of time

- **PHP Client**: <span style="color: orangered; font-weight: bold">FAILED</span>
  - Cannot use `laudis/neo4j-php-client`
  - not compatible: uses old packages
  - we cannot remove old packages, they are in use by laravel/laravel framework

- **Bolt Protocol**: <span style="color: green; font-weight: bold">SUCCESS</span>
  - Used `stefanak-michal/bolt`
  - raw bolt connections
  - We can run queries over this protocol

