function attachEvents() {
  const baseUrl = 'https://baas.kinvey.com/appdata/kid_SJYBYFIbN/biggestCatches';
  const Authorization = 'Basic ' + btoa('user:user');

  $('.add').on('click', addCatch);
  $('.load').on('click', loadData);

  function addCatch() {
    const $inputs = $('#addForm input');

    const angler = $inputs[0].value;
    const weight = +$inputs[1].value;
    const species = $inputs[2].value;
    const location = $inputs[3].value;
    const bait = $inputs[4].value;
    const captureTime = +$inputs[5].value;

    if (angler && weight && species && location && bait && captureTime) {
      const data = { angler, weight, species, location, bait, captureTime };
      $.ajax({
          type: "POST",
          contentType: "application/json; charset=utf-8",
          data: JSON.stringify(data),
          url: baseUrl,
          headers: {
            Authorization
          }
        })
        .then(loadData)
        .catch(handleError);
    }
  }

  function loadData() {
    const $catches = $('#catches');

    $.get({
        url: baseUrl,
        headers: { Authorization },
        contentType: "application/json; charset=utf-8",
      })
      .then(catches => {
        $catches.empty();
        catches.forEach(fish => {
          const html = $( /*html */ `
            <div class="catch" data-id="${fish._id}">
              <label>Angler</label>
              <input type="text" class="angler" value="${fish.angler}" />
              <label>Weight</label>
              <input type="number" class="weight" value="${fish.weight}" />
              <label>Species</label>
              <input type="text" class="species" value="${fish.species}" />
              <label>Location</label>
              <input type="text" class="location" value="${fish.location}" />
              <label>Bait</label>
              <input type="text" class="bait" value="${fish.bait}" />
              <label>Capture Time</label>
              <input type="number" class="captureTime" value="${fish.captureTime}" />
              <button class="update">Update</button>
              <button class="delete">Delete</button>
            </div>`);

          $(html).find('.delete').on('click', () => {
            $.ajax({
              method: 'DELETE',
              url: baseUrl + '/' + fish._id,
              headers: { Authorization },
              contentType: "application/json; charset=utf-8",
            }).then($(html).remove());
          });

          $(html).find('.update').on('click', () => {
            const angler = $(html).find('.angler').val();
            const weight = +$(html).find('.weight').val();
            const species = $(html).find('.species').val();
            const location = $(html).find('.location').val();
            const bait = $(html).find('.bait').val();
            const captureTime = +$(html).find('.captureTime').val();

            $.ajax({
              method: 'PUT',
              url: baseUrl + '/' + fish._id,
              headers: { Authorization },
              contentType: "application/json; charset=utf-8",
              data: JSON.stringify({ angler, weight, species, location, bait, captureTime }),
            });
          });

          $catches.append(html);
        });
      }).catch(handleError);
  }

  function handleError(err) {
    console.error(err);
  }
}