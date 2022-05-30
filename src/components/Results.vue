<template>
    <div class="greetings">
        <h2>Resultados de Partidos</h2>
        <br>
        <h2>
            <br>
            <button type="submit" v-on:click="tableFromJson">Create Table from JSON data</button>
            <p id='showData'></p>
        </h2>
        <h2>.....</h2>
    </div>
</template>


<script>
export default {
    methods: {
        tableFromJson: function () {
            // the json data. (you can change the values for output.)
            var myBooks = [
                {
                    'Book ID': '1', 'Book Name': 'Challenging Times',
                    'Category': 'Business', 'Price': '125.60'
                },
                {
                    'Book ID': '2', 'Book Name': 'Learning JavaScript',
                    'Category': 'Programming', 'Price': '56.00'
                },
                {
                    'Book ID': '3', 'Book Name': 'Popular Science',
                    'Category': 'Science', 'Price': '210.40'
                }
            ]

            // Extract value from table header. 
            // ('Book ID', 'Book Name', 'Category' and 'Price')
            var col = [];
            for (var i = 0; i < myBooks.length; i++) {
                for (var key in myBooks[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }

            // Create a table.
            var table = document.createElement("table");

            // Create table header row using the extracted headers above.
            var tr = table.insertRow(-1);                   // table row.

            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");      // table header.
                th.innerHTML = col[i];
                tr.appendChild(th);
            }

            // add json data to the table as rows.
            for (var i = 0; i < myBooks.length; i++) {

                tr = table.insertRow(-1);

                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = myBooks[i][col[j]];
                }
            }

            // Now, add the newly created table with json data, to a container.
            var divShowData = document.getElementById('showData');
            divShowData.innerHTML = "";
            divShowData.appendChild(table);
        }
    }
}
</script>
<style>
.information {
    margin: 0;
    padding: 0%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.information h1 {
    font-size: 60px;
    color: #0f1316;
}

.information h2 {
    font-size: 40px;
    color: #283747;
}

.information span {
    color: crimson;
    font-weight: bold;
}
</style>