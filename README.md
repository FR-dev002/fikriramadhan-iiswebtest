# Website Test IIS

### pre requidsite
    - node js
    - npm / npx

### how to use
```
    git clone https://github.com/FR-dev002/fikriramadhan-iiswebtest.git

    cd fikriramadhan-iiswebtest

    npm start
```
akses website di http://localhost:300


### list component
| Component     | Property      |  value                           |
| ------------- | ------------- | -------------------------------- |
| TitleHeader   | type          | String (page-title , box-title)  |
|               |               |                                  |
| LargeCard     | top           | Integer (1-n)                    |
|               | bottom        | Integer (1-n)                    |
|               | right         | Integer (1-n)                    |
|               | left          | Integer (1-n)                    |
|               | width         | String (1px - Npx)               |
|               | height        | String (1px - Npx)               |
|               | borderRadius  | String (1px - Npx)               |
|               | background    | String (#fff, 'red, dll)         |
|               |               |                                  |
| Checkbox      | checked       | Boolean (true,false)             |
|               |               |                                  |
| LabelTable    | title         | String (value)                   |
|               | fontSize      | String (1px - n px)              |
|               | lineHeight    | String (1px - n px)              |
|               | opacity       | integer (0-1)                    |
|               | latterSpacing | String (0-n)                     |
|-------------- | ------------- |--------------------------------- |


### List Action / Event
| Component     | event         |
| ------------- | ------------- |
| Checkbox      | click         |