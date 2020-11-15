<script>
    export let title = ''
    export let description = ''
    export let size = ''
    export let beds = NaN
    export let people = NaN
    export let icon = NaN
    export let price = NaN
    export let photo = ''
</script>

<div on:click class="flex p-4 border border-gray-500">
    <img class="" src={photo} alt={title} />
    <h2>
        {title}
    </h2>
    <div>
        {description}
    </div>
    <div>
        {size}m2
    </div>
    <div>
        ICON {icon}
    </div>
    <div>
        Beds: {beds}
    </div>
    <div>
        People: {people}
    </div>

    <div>
        <!-- currency???? -->
        {price}
    </div>
</div>
