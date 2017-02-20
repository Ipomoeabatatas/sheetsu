
 var sheetsuUrl = "https://sheetsu.com/apis/v1.0/fd1fd2c29f4b";

// Jquery script to GET 
       $.ajax({
         url: sheetsuUrl,
         dataType: 'json',
         type: 'GET',

         // place for handling successful response
         success: function(data) {
           addCharacters(data);
         },

         // handling error response
         error: function(data) {
           console.log(data);
         }
       });

       addCharacters = function(characters) {
         var list = $('#spelling');
         for(var i=0; i<characters.length; i+=1) {
           char = characters[i];
           html = "<li id=" + char.id + ">" +  char.School +  char.Level + " Amount: " + char.SpellingWord + "</p></li>";
           list.append(html);
         }
       };
	   

	   
// Jquery script to POST

    (function ($) {
      $.fn.serializeFormJSON = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
          if (o[this.name]) {
            if (!o[this.name].push) { o[this.name] = [o[this.name]]; }
            o[this.name].push(this.value || '');
          } else { o[this.name] = this.value || ''; }
        });
        return o;
      };
    })(jQuery);


	   
	       $('#form').submit(function(e) {
      // prevent default submiting form
      e.preventDefault();

      // serialize data to JSON
      var data = $('#form').serializeFormJSON();

      $.ajax({
        url: 'https://sheetsu.com/apis/v1.0/fd1fd2c29f4b',
        data: data,
        dataType: 'json',
        type: 'POST',

        // place for handling successful response
        // showing (redirecting to) something like /thanks.html
        // page could be a good idea
        success: function(data) {
          $('#status').html('Thank you. Update is successful');
        },

        // handling error response
        error: function(data) {
          console.log(data);
        }
      });

      return false;
    });
	   
	   
	   
// Jquery script to PUT



// Jquery script to POST
	   
	   
	   
