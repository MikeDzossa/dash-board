<template>
  <div class="sidebar-item">
    <router-link class="button" :to="item.path">
        <span class="material-icons">{{item.icon}}</span>
        <span class="text">{{item.component}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'SideBarItem',
	props: {
        item: Object
    }
}
</script>

<style lang="scss">
    .sidebar-item{
		margin: 1em 0;
        .button .text {
			opacity: 0;
			transition: opacity 0.3s ease-in-out;
		}
		.button{
                display: flex;
                align-items: center;
                text-decoration: none;
                padding: 0.5em 1em;
                transition: 0.2s ease-out;

                .material-icons{
                    font-size: 2em;
                    color: var(--gray);
                    transition: 0.2s ease-out;
                }

                .text{
                    color: var(--gray);
                    transition: 0.2s ease-out;
                }

                &:hover{
                    border: 2px solid var(--blue);
                }
				&.router-link-active{
					.material-icons, .text{
						color: var(--white);
						font-weight: bold;
					}
                }
            }
    }

</style>