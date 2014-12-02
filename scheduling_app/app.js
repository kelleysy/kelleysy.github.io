angular.module('scheduleApp', ['firebase'])

.controller('mainController', function($scope, $firebase) {
  
  // get # of real time users
  var listRef = new Firebase("https://kelleysy-scheduling.firebaseio.com/presence/");
  var userRef = listRef.push();
  
  // Add ourselves to presence list when online.
  var presenceRef = new Firebase("https://kelleysy-scheduling.firebaseio.com/.info/connected");
  presenceRef.on("value", function(snap) {
    if (snap.val()) {
      userRef.set(true);
      // Remove ourselves when we disconnect.
      userRef.onDisconnect().remove();
    }
  });
  
  listRef.on("value", function(snap) {
    $scope.online = snap.numChildren();
  });  
  
  var ref = new Firebase("https://kelleysy-scheduling.firebaseio.com/days");  
  var fb = $firebase(ref);
  
  // sync as object 
  var syncObject = fb.$asObject();
  
  // three way data binding
  syncObject.$bindTo($scope, 'days');
  
  $scope.reset = function() {    
    fb.$set({
      a: {
        name: 'Monday',
        slots: {
          0: {
            time: '9:00am',
            booked: false
          },
          1: {
            time: '11:00am',
            booked: false
          },
          2: {
            time: '1:00pm',
            booked: false
          },
          3: {
            time: '3:00pm',
            booked: false
          },
          4: {
            time: '5:00pm',
            booked: false
          },
          5: {
            time: '7:00pm',
            booked: false
          }
    	  }
      },
      b: {
        name: 'Tuesday',
        slots: {
          0: {
            time: '9:00am',
            booked: false
          },
          1: {
            time: '11:00am',
            booked: false
          },
          2: {
            time: '1:00pm',
            booked: false
          },
          3: {
            time: '3:00pm',
            booked: false
          },
          4: {
            time: '5:00pm',
            booked: false
          },
          5: {
            time: '7:00pm',
            booked: false
          }
    	  }
      },
      c: {
        name: 'Wednesday',
        slots: {
          0: {
            time: '9:00am',
            booked: false
          },
          1: {
            time: '11:00am',
            booked: false
          },
          2: {
            time: '1:00pm',
            booked: false
          },
          3: {
            time: '3:00pm',
            booked: false
          },
          4: {
            time: '5:00pm',
            booked: false
          },
          5: {
            time: '7:00pm',
            booked: false
          }
    	  }
      },
      d: {
        name: 'Thursday',
        slots: {
          0: {
            time: '9:00am',
            booked: false
          },
          1: {
            time: '11:00am',
            booked: false
          },
          2: {
            time: '1:00pm',
            booked: false
          },
          3: {
            time: '3:00pm',
            booked: false
          },
          4: {
            time: '5:00pm',
            booked: false
          },
          5: {
            time: '7:00pm',
            booked: false
          }
    	  }
      },
      e: {
        name: 'Friday',
        slots: {
          0: {
            time: '9:00am',
            booked: false
          },
          1: {
            time: '11:00am',
            booked: false
          },
          2: {
            time: '1:00pm',
            booked: false
          },
          3: {
            time: '3:00pm',
            booked: false
          },
          4: {
            time: '5:00pm',
            booked: false
          },
          5: {
            time: '7:00pm',
            booked: false
          }
    	}
      }
    });    
  };
  
});
