// Copyright (c) 2023, Codventures Private Limited and contributors
// For license information, please see license.txt

frappe.ui.form.on('Twinkling lights', {
	refresh: function (frm) {
		// Variable to store the interval ID
		var intervalId;

		frm.add_custom_button(__('Start'), function () {
			// Start the twinkling effect for all fields
			intervalId = setInterval(function () {
				// Iterate over fields from field_1 to field_50
				for (var i = 1; i <= 50; i++) {
					var fieldName = 'field_' + i;

					

					// Get a random color
					var randomColor = getRandomColor();

					// Apply the random color to the current field
					frm.fields_dict[fieldName].$input.css('background-color', randomColor);
				}
			}, 300); // Change color every 1000 milliseconds (1 second)
		});

		frm.add_custom_button(__('Stop'), function () {
			// Stop the twinkling effect
			clearInterval(intervalId);

			// Reset the color to a default color if needed for all fields
			for (var i = 1; i <= 50; i++) {
				var fieldName = 'field_' + i;
				frm.fields_dict[fieldName].$input.css('background-color', 'initial');
			}
		});

		// Function to generate a random color
		function getRandomColor() {
			var letters = '0123456789ABCDEF';
			var color = '#';
			for (var i = 0; i < 6; i++) {
				color += letters[Math.floor(Math.random() * 16)];
			}
			return color;
		}
	}
});
